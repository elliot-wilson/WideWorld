json.array! @locations do |location|
    json.extract! location, :id, :title
end