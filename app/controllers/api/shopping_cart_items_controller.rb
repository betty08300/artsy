class Api::ShoppingCartItemsController < ApplicationController 
    # before_action :require_login
    # todo: undo this

    def index 
        @shopping_cart_items = ShoppingCartItem.where(user_id: params[:user_id])
        render :index 
    end 

    def create 
        # todo: make sure to check if cart item already exists for user.
        # if so, do not create a duplicate. find the item and increase the
        # quantity by 1. 
        @shopping_cart_item = ShoppingCartItem.new(shopping_cart_item_params)
        if @shopping_cart_item.save 
            render :show
        else 
            render json: @shopping_cart_item.errors.full_messages, status: 422
        end 
    end 

    def update 
        @shopping_cart_item = ShoppingCartItem.find(params[:id])
        if @shopping_cart_item.update_attribute(shopping_cart_item_params)
            render :show 
        else 
            render json:  @shopping_cart_item.errors.full_messages, status: 422
        end 
    end 

    def destroy
        @shopping_cart_item = ShoppingCartItem.find(params[:id])
        @shopping_cart_item.destroy
        render :show        
    end 

    private 
    def shopping_cart_item_params
        params.require(:shopping_cart_item).permit(:user_id, :product_id, :quantity)
    end 




end 
