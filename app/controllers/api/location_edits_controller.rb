class Api::LocationEditsController < ApplicationController

    def create

        @location_edit = LocationEdit.new(location_edit_params)

        if @location_edit.save
            render :show
        else
            render json: ['Unable to save edit'], status: 422
        end

    end

    private

    def location_edit_params
        params.require(:location_edit).permit(:location_id, :editor_id)
    end

end
