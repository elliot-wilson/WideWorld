class Api::UserLocationListsController < ApplicationController

    def create
        @user_location_list = UserLocationList.new(user_location_list_params)

        if @user_location_list.save
            render :simple_show
        else
            render json: @user.errors.full_messages, status: 422
        end

    end

    def show
        @user_location_list = UserLocationList.find(params[:id])
        render :detail_show
    end

    def update
        @user_location_list = UserLocationList.find(params[:id])

        if @location.update_attributes(user_location_list_params)
            render :detail_show
        else
            render json: @user_location_list.errors.full_messages, status: 422
        end
    end

    def destroy
        @user_location_list = LocationVisit.find(params[:id])
        if @user_location_list && @user_location_list.author_id == current_user.id
            @user_location_list.delete
            render json: ['Successful deletion'], status: 200
        else
            render json: ['Unable to remove list'], status: 422
        end
    end

    def user_location_list_params
        params.require(:user_location_list).permit(:title, :description, :author_id)
    end

end
