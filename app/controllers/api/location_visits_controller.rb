class Api::LocationVisitsController < ApplicationController

    def create
        @location_visit = LocationVisit.new(location_visit_params)

        if @location_visit.save
            render :show
        else
            render json: ['Unable to check in to location'], status: 422
        end

    end

    def destroy

        @location_visit = LocationVisit.find(params[:id])
        
        if @location_visit && @location_visit.visitor_id == current_user.id
            @location_visit.delete
            render json: ["Successful deletion"], status: 200
        else
            render json: ['Unable to remove visit'], status: 422
        end

    end

    private

    def location_visit_params
        params.require(:location_visit).permit(:location_id, :visitor_id)
    end
end
