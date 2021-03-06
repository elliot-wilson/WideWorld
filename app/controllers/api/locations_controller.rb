class Api::LocationsController < ApplicationController

    def index
        @locations = Location.with_attached_photos.all

        render :index
    end

    def random_locations
        @locations = Location.with_attached_photos.order('RANDOM()').first(9)

        render :index
    end

    def random
        @location = Location.with_attached_photos.order('RANDOM()').first

        render :show
    end

    def create
        @location = Location.new(location_params)
        
        if @location.save
            render :show
        else
            render json: @location.errors.full_messages, status: 422
        end
        
    end
    
    def show
        @location = Location.with_attached_photos.find(params[:id])
        render :show
    end
    
    def update
        @location = Location.find(params[:id])
        if @location.update_attributes(location_params)
            render :show
        else
            render json: @location.errors.full_messages, status: 422
        end
    end

    

    private

    def location_params
        params.require(:location).permit(:title, :summary, :address, :lat, :lng,
             :description, :additional_info, :official_website, 
             :initial_author_id, photos: [])
    end

end
