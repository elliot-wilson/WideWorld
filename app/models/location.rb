# == Schema Information
#
# Table name: locations
#
#  id                :integer          not null, primary key
#  title             :string           not null
#  summary           :string(280)      not null
#  address           :string           not null
#  lat               :float
#  lng               :float
#  description       :text             not null
#  additional_info   :text(500)
#  official_website  :string
#  initial_author_id :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Location < ApplicationRecord
    validates :title, :address, :description, :initial_author_id, presence: true
    validates :summary, presence: true, length: {maximum: 280}
    validates :additional_info, length: {maximum: 500}


    belongs_to :author,
        primary_key: :id,
        foreign_key: :initial_author_id,
        class_name: 'User'

end
