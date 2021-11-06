# == Schema Information
#
# Table name: location_edits
#
#  id          :bigint           not null, primary key
#  editor_id   :integer          not null
#  location_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class LocationEdit < ApplicationRecord

    validates :location_id, :editor_id, presence: true

    belongs_to :editor,
        primary_key: :id,
        foreign_key: :editor_id,
        class_name: :User

    belongs_to :location,
        primary_key: :id,
        foreign_key: :location_id,
        class_name: :Location

end
