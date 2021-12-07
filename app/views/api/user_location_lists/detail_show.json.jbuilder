json.list do 
    json.partial! 'api/user_location_lists/list.json.jbuilder', list: @user_location_list
end

json.author do
    json.extract! @user_location_list.author, :id, :username
end

json.listings do
    @user_location_list.listings.each do |listing|
        json.set! listing.id do
            json.extract! listing, :id, :location_id
        end
    end
end

json.listed_locations do
    json.array! @user_location_list.listed_locations do |location|
        json.extract! location, :id, :title, :lat, :lng
        json.photoURLs location.photos.map { |photo| url_for(photo) }
    end
end
