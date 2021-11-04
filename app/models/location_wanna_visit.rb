# == Schema Information
#
# Table name: location_wanna_visits
#
#  id               :bigint           not null, primary key
#  location_id      :integer          not null
#  wanna_visitor_id :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
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
