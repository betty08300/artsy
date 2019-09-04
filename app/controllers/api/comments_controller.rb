class Api::CommentsController < ApplicationController 
    def index
        
        if params[:user_id]
            @comments = Comment.where(user_id: params[:user_id])
        elsif params[:product_id]
            @comments = Comment.where(product_id: params[:product_id])
        else 
            @comments = Comment.all 
        end 
        render :index 

    end 

    def create 
        @comment = Comment.new(comment_params)
        if @comment.save 
            render :show
        else 
            render json: @comment.errors.full_messages, status: 422
        end  
    end 

    def update 
        @comment = Comment.find(params[:id])
        if @comment.update(comment_params)
            render :show
        else 
            render json: @comment.errors.full_messages, status: 422
        end 
    end 

    def destroy
        @comment = Comment.find(params[:id])
        if @comment.destroy 
            render :show
        else 
            render json: @comment.errors.full_messages, status: 422
        end 
    end 

    private

    def comment_params
        params.require(:comment).permit(:user_id, :product_id, :body, :rating)
    end 

end 