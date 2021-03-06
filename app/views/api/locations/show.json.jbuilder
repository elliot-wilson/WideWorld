json.location do
        json.extract! @location, :id, :title, :summary, :address, :lat, :lng, 
                :description, :additional_info, :official_website
        json.set! "initial_author" do
                json.extract! @location.initial_author, :id, :username
                if (@location.initial_author.photo.attached?)
                        json.photoURL url_for(@location.initial_author.photo)
                end
        end
        json.photoURLs @location.photos.map { |file| url_for(file) }
end


json.visitors do
        @location.location_visits.each do |location_visit|
                json.set! location_visit.id do
                        json.extract! location_visit, :id, :visitor_id, :location_id
                end
        end
end

json.wanna_visitors do
        @location.location_wanna_visits.each do |location_wanna_visit|
                json.set! location_wanna_visit.id do
                        json.extract! location_wanna_visit, :id, :wanna_visitor_id, :location_id
                end
        end
end

json.editors do
        json.array! @location.editors.distinct do |editor|
                json.extract! editor, :id, :username
        end
end

json.location_listings do
        @location.listings.each do |listing|
                json.set! listing.id do
                        json.extract! listing, :id, :list_id
                end
        end
end

json.users do
        @location.users_that_list_it.each do |user|
                json.set! user.id do
                        json.extract! user, :id
                end
        end
end

if current_user
        json.current_user_lists do
                current_user.location_lists.each do |list|
                        json.set! list.id do 
                                json.extract! list, :id, :title
                        end
                end
        end
end