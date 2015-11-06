require 'test_helper'

class PaisControllerTest < ActionController::TestCase
  setup do
    @pai = pais(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:pais)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create pai" do
    assert_difference('Pai.count') do
      post :create, pai: { nome: @pai.nome }
    end

    assert_redirected_to pai_path(assigns(:pai))
  end

  test "should show pai" do
    get :show, id: @pai
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @pai
    assert_response :success
  end

  test "should update pai" do
    patch :update, id: @pai, pai: { nome: @pai.nome }
    assert_redirected_to pai_path(assigns(:pai))
  end

  test "should destroy pai" do
    assert_difference('Pai.count', -1) do
      delete :destroy, id: @pai
    end

    assert_redirected_to pais_path
  end
end
