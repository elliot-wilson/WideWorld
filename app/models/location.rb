# == Schema Information
#
# Table name: locations
#
#  id                :bigint           not null, primary key
#  title             :string           not null
#  summary           :string(280)      not null
#  address           :string           not null
#  lat               :float
#  lng               :float
#  description       :text             not null
#  additional_info   :text
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
        class_name: :User

    has_many :location_visits,
        primary_key: :id,
        foreign_key: :location_id,
        class_name: :LocationVisit

    has_many :visitors,
        through: :location_visits,
        source: :visitor

    has_many :location_wanna_visits,
        primary_key: :id,
        foreign_key: :location_id,
        class_name: :LocationWannaVisit
    
    has_many :wanna_visitors,
        through: :location_wanna_visits,
        source: :wanna_visitor

    has_many :edits,
        primary_key: :id,
        foreign_key: :location_id,
        class_name: :LocationEdit

    has_many :editors,
        through: :edits,
        source: :editor

    has_many :listings,
        primary_key: :id,
        foreign_key: :location_id,
        class_name: :LocationListing
    
    has_many :lists,
        through: :listings,
        source: :list

    has_many_attached :photos

    def initial_author
        id = initial_author_id
        User.find(id)
    end

end
