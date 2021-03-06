class Api::SearchesController < ApplicationController

    def index
        if params[:query]
            split_query = params[:query].split(" ").join("%")
            @locations = Location
                .where("title ILIKE ?", "%#{split_query}%")
                .limit(5)
                .order('title')
            render :index
        else
            render json: ['Search query required'], status: 422
        end
    end

end
