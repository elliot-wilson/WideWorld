class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login(@user)
            render 'api/users/simple_show'
        else
            render json: ['Invalid username/password combination'], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            logout
            render json: ["Successful logout"], status: 200
        else
            render json: ["No user is logged in"], status: 404
        end
    end

end