json.user do 
    json.partial! 'api/users/user.json.jbuilder', user: @user
end

json.locationVisits do 
    json.array! @user.visited_locations do |visitedLocation|
        json.partial! 'api/locations/snapshot.json.jbuilder', location: visitedLocation
    end
end

json.locationWannaVisits do 
    json.array! @user.wanna_visit_locations do |wannaVisitLocation|
        json.partial! 'api/locations/snapshot.json.jbuilder', location: wannaVisitLocation
    end
end

json.locationAdds do 
    json.array! @user.locations_authored do |authoredLocation|
        json.partial! 'api/locations/snapshot.json.jbuilder', location: authoredLocation
    end
end

json.locationEdits do 
    json.array! @user.edited_locations do |editedLocation|
        json.partial! 'api/locations/snapshot.json.jbuilder', location: editedLocation
    end
end