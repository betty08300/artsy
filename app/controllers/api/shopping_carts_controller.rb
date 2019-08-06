class Api::ShoppingCartsController < ApplicationController 
    before_action :require_login

    def index 
        @shopping_carts = ShoppingCart.where(user_id: params[:user_id])
        render :index 
    end 

    def create 
        @shopping_cart = ShoppingCart.new(shopping_cart_params)
        if @shopping_cart.save 
            render :show
        else 
            render json: @shopping_cart.errors.full_messages, status: 422
        end 
    end 

    def update 
        @shopping_cart = ShoppingCart.find(params[:id])
        if @shopping_cart.update_attribute(shopping_cart_params)
            render :show 
        else 
            render json:  @shopping_cart.errors.full_messages, status: 422
        end 
    end 

    def destroy
        @shopping_cart = ShoppingCart.find(params[:id])
        @shopping_cart.destroy
        render :show        
    end 

    private 
    def shopping_cart_params
        params.require(:shopping_cart).permit(:user_id, :product_id, :quantity)
    end 




end 
