json.set! location.id do
    json.extract! location, :id, :title, :lat, :lng
end