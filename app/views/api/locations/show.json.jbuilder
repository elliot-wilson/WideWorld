json.location do
        json.extract! @location, :id, :title, :summary, :address, :lat, :lng, 
                :description, :additional_info, :official_website
        json.set! "initial_author" do
                json.extract! @location.initial_author, :id, :username
        end
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
        json.array! @location.editors do |editor|
                json.extract! editor, :id, :username
        end
end