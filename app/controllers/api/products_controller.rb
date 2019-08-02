class Api::ProductsController < ApplicationController 
    before_action :require_login, only: [:create, :update, :destroy]

    def index 
        if params[:user_id]
            @products = Product.where(user_id: params[:user_id])
        else 
            @products = Product.all 
        end 
        render :index 
    end 
    
    def create 
        @product = Product.new(product_params)
        if @product.save
            render :show 
        else 
            render json: @product.errors.full_messages, status: 422
    
        end 
    end 

    def show
        @product = Product.find_by(params[:id])
    end 

    def update
        @product = Product.find_by(params[:id])
        if @product.update_attributes(product_params)
            render 'api/products/show'
        else 
            render json: @product.errors.full_messages, status: 422
        end 
    end 

    def destroy
        @product = Product.find_by(params[:id])
        if @product.destroy
            render :show 
        else 
            render json: @product.errors.full_messages, status: 422
        end 
    end 


    private 
    def product_params
        params.require(:product).permit(:user_id, :title, :description, :price, :images, :who, :what, :when)
    end 



end 