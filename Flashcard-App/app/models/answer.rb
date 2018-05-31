class Answer < ApplicationRecord
  belongs_to :instance
  belongs_to :questions
end
