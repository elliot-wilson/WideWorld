json.user do 
    json.partial! 'api/users/user.json.jbuilder', user: @user
end

json.locationVisits do 
    json.array! @user.visited_locations.order('location_visits.created_at DESC') do |visitedLocation|
        json.partial! 'api/locations/snapshot.json.jbuilder', location: visitedLocation
    end
end

json.locationWannaVisits do 
    json.array! @user.wanna_visit_locations.order('location_wanna_visits.created_at DESC') do |wannaVisitLocation|
        json.partial! 'api/locations/snapshot.json.jbuilder', location: wannaVisitLocation
    end
end

json.locationAdds do 
    json.array! @user.locations_authored.order('created_at DESC') do |authoredLocation|
        json.partial! 'api/locations/snapshot.json.jbuilder', location: authoredLocation
    end
end

json.locationEdits do 
    json.array! @user.edited_locations.order('location_edits.created_at DESC').uniq do |editedLocation|
        json.partial! 'api/locations/snapshot.json.jbuilder', location: editedLocation
    end
end