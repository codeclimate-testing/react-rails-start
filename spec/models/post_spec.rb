require 'rails_helper'

RSpec.describe Post, type: :model do
  let!(:user) { create(:user) }
  context '#create' do
    it { expect(build(:post)).to be_valid }
    context 'without author' do
      it { expect(build(:post, author: nil)).to_not be_valid }
    end
    context 'without title' do
      it { expect(build(:post, title: nil)).to_not be_valid }
    end
    context 'with short title' do
      it { expect(build(:post, title: '1234')).to_not be_valid }
    end
    context 'with long body' do
      subject { build(:post, body: Faker::Lorem.paragraph_by_chars(number: 150)) }

      it { expect(subject).to_not be_valid }
    end
  end
end
