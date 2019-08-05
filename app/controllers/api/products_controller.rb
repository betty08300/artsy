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
        @product = Product.find(params[:id])
    end 

    def update
        @product = Product.find(params[:id])
        puts @product
        if @product.update(product_params)
            render 'api/products/show'
        else 
            render json: @product.errors.full_messages, status: 422
        end 
    end 

    def destroy
        @product = Product.find(params[:id])
        if @product.destroy
            render :show 
        else 
            render json: @product.errors.full_messages, status: 422
        end 
    end 


    private 
    def product_params
        params.require(:product).permit(:user_id, :title, :description, :price, :who, :what, :when, images: [])
    end 



end 