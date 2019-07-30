class Api::SessionsController < ApplicationController 
    def create 
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login(@user)
            render 'api/users/show'
        else 
            render json: ['Invalid email or password'], status: 401
        end 
    end 

    def destory 
        @user = current_user
        if @user 
            logout 
            render 'api/user/show'
        else 
            render json: ['Not sign in'], status: 404
        end 
    end 

end 

