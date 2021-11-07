json.user do 
    json.partial! 'api/users/user.json.jbuilder', user: @user
end

json.locationVisits do 
    @user.visited_locations.each do |visitedLocation|
        json.partial! 'api/locations/snapshot.json.jbuilder', location: visitedLocation
    end
end

json.locationWannaVisits do 
    @user.wanna_visit_locations.each do |wannaVisitLocation|
        json.partial! 'api/locations/snapshot.json.jbuilder', location: wannaVisitLocation
    end
end

json.locationAdds do 
    @user.locations_authored.each do |authoredLocation|
        json.partial! 'api/locations/snapshot.json.jbuilder', location: authoredLocation
    end
end

json.locationEdits do 
    @user.edited_locations.each do |editedLocation|
        json.partial! 'api/locations/snapshot.json.jbuilder', location: editedLocation
    end
end