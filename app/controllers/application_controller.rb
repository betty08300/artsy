class ApplicationController < ActionController::Base
    protect_from_forgery with: :null_session

    helper_method :current_user, :current_user_id, :logged_in?

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by_session_token(session[:session_token])
    end 

    def current_user_id
        current_user ? current_user.id : nil
    end 

    def logged_in?
        !!current_user
    end 

    def login(user)
        session[:session_token] = user.reset_token!
    end 

    def logout 
        current_user.reset_token!
        session[:session_token] = nil 
        @current_user = nil
    end 

    def require_login
        if !logged_in?
            render json: {base: ['invalid credentials']}, status: 401
        end 
    end 

end
