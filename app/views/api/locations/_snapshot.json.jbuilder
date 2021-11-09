json.set! location.id do
    json.extract! location, :id, :title, :summary, :lat, :lng
    json.photoURLs location.photos.map { |photo| url_for(photo) }
end