require 'rails_helper'
require 'rails-controller-testing'

RSpec.describe StocksController, type: :controller do

  let!(:stock) {Stock.create!(ticker: "AAA") }

    describe "GET #index" do
      it "responds with status code 200" do
        get :index
        expect(response).to have_http_status 200
      end
      it "renders the :index template" do
        get :index
        expect(response).to render_template('index')
      end
    end





end
