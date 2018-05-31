class AddColumnsToAnswers < ActiveRecord::Migration[5.2]
  def change
    add_column :answers, :score, :integer
    add_column :answers, :created_at, :datetime, null: false
    add_column :answers, :updated_at, :datetime, null: false

  end
end
