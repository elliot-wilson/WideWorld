json.array! @locations do |location|
    json.partial! 'api/locations/snapshot', location: location
end