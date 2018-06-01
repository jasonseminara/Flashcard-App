class AddRefColumnToQuestions < ActiveRecord::Migration[5.2]
  def change
    add_reference :questions, :quiz, index: true
  end
end
