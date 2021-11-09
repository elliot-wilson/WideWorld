@locations.each do |location|
    json.partial! 'api/locations/snapshot', location: location
end