require 'test_helper'

class SavedInterestsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @saved_interest = saved_interests(:one)
  end

  test "should get index" do
    get saved_interests_url, as: :json
    assert_response :success
  end

  test "should create saved_interest" do
    assert_difference('SavedInterest.count') do
      post saved_interests_url, params: { saved_interest: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show saved_interest" do
    get saved_interest_url(@saved_interest), as: :json
    assert_response :success
  end

  test "should update saved_interest" do
    patch saved_interest_url(@saved_interest), params: { saved_interest: {  } }, as: :json
    assert_response 200
  end

  test "should destroy saved_interest" do
    assert_difference('SavedInterest.count', -1) do
      delete saved_interest_url(@saved_interest), as: :json
    end

    assert_response 204
  end
end
