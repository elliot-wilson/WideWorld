class Api::LocationWannaVisitsController < ApplicationController

    def create
        @location_wanna_visit = LocationWannaVisit.new(location_wanna_visit_params)

        if @location_wanna_visit.save
            render :show
        else
            render json: ['Unable to check in to location'], status: 422
        end

    end

    def destroy

        @location_wanna_visit = LocationWannaVisit.find(params[:id])

        if @location_wanna_visit && @location_wanna_visit.wanna_visitor_id == current_user.id
            @location_wanna_visit.delete
            render json: ["Successful deletion"], status: 200
        else
            render json: ['Unable to remove visit'], status: 422
        end

    end

    private

    def location_wanna_visit_params
        params.require(:location_wanna_visit).permit(:location_id, :wanna_visitor_id)
    end

end
