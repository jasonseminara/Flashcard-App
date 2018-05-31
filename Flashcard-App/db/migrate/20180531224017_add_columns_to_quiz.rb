class AddColumnsToQuiz < ActiveRecord::Migration[5.2]
  def change
    add_column :quizzes, :name, :string
    add_column :quizzes, :description, :string
    add_column :quizzes, :created_at, :datetime, null: false
    add_column :quizzes, :updated_at, :datetime, null: false
  end
end
