json.location do
        json.extract! @location, :id, :title, :summary, :address, :lat, :lng, 
                :description, :additional_info, :official_website, :initial_author_id
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