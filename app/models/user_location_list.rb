# == Schema Information
#
# Table name: user_location_lists
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :string
#  author_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class UserLocationList < ApplicationRecord

    validates :title, :author_id, presence: true
    validates :title, uniqueness: { scope: :author_id }

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    has_many :listings, dependent: :destroy,
        primary_key: :id,
        foreign_key: :list_id,
        class_name: :LocationListing

    has_many :listed_locations,
        through: :listings,
        source: :location

end
