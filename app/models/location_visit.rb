# == Schema Information
#
# Table name: location_visits
#
#  id          :bigint           not null, primary key
#  location_id :integer          not null
#  visitor_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class LocationVisit < ApplicationRecord
    validates :location_id, :visitor_id, presence: true

    belongs_to :location,
        primary_key: :id,
        foreign_key: :location_id,
        class_name: :Location

    belongs_to :visitor,
        primary_key: :id,
        foreign_key: :visitor_id,
        class_name: :User

end
