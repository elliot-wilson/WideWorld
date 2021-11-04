class LocationWannaVisit < ApplicationRecord
    validates :location_id, :wanna_visitor_id, presence: true

    belongs_to :location,
        primary_key: :id,
        foreign_key: :location_id,
        class_name: :Location

    belongs_to :wanna_visitor,
        primary_key: :id,
        foreign_key: :wanna_visitor_id,
        class_name: :User

end
