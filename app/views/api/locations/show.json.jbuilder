json.extract! @location, :id, :title, :summary, :address, :lat, :lng, 
        :description, :additional_info, :official_website, :initial_author_id
json.photoURLs @location.photos.map { |file| url_for(file) }