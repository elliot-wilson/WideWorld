# == Schema Information
#
# Table name: location_listings
#
#  id          :bigint           not null, primary key
#  location_id :integer          not null
#  list_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class LocationListing < ApplicationRecord

    validates :location_id, :list_id, presence: true
    validates :location_id, uniqueness: { scope: :list_id }

    belongs_to :location,
        primary_key: :id,
        foreign_key: :location_id,
        class_name: :Location

    belongs_to :list,
        primary_key: :id,
        foreign_key: :list_id,
        class_name: :UserLocationList

end
