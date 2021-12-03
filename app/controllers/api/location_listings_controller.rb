class Api::LocationListingsController < ApplicationController

    def create
        @location_listing = LocationListing.new(location_listing_params)

        if @location_listing.save
            render :show
        else
            render json: ['Unable to add location to list'], status: 422
        end

    end

    def destroy
        @location_listing = LocationListing.find(params[:id])

        if @location_listing && @location_listing.list.author_id == current_user.id
            @location_listing.delete
            render json: ["Successful deletion"], status: 200
        else
            render json: ["Unable to remove from list"], status: 422
        end

    end

    def location_listing_params
       params.require(:location_listing).permit(:location_id, :list_id) 
    end

end
