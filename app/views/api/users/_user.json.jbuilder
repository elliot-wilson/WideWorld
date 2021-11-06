json.extract! user, :id, :username, :email, :created_at
json.photoUrl url_for(user.photo)