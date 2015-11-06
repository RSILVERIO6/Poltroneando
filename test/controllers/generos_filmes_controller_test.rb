require 'test_helper'

class GenerosFilmesControllerTest < ActionController::TestCase
  setup do
    @generos_filme = generos_filmes(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:generos_filmes)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create generos_filme" do
    assert_difference('GenerosFilme.count') do
      post :create, generos_filme: { filme: @generos_filme.filme, genero: @generos_filme.genero }
    end

    assert_redirected_to generos_filme_path(assigns(:generos_filme))
  end

  test "should show generos_filme" do
    get :show, id: @generos_filme
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @generos_filme
    assert_response :success
  end

  test "should update generos_filme" do
    patch :update, id: @generos_filme, generos_filme: { filme: @generos_filme.filme, genero: @generos_filme.genero }
    assert_redirected_to generos_filme_path(assigns(:generos_filme))
  end

  test "should destroy generos_filme" do
    assert_difference('GenerosFilme.count', -1) do
      delete :destroy, id: @generos_filme
    end

    assert_redirected_to generos_filmes_path
  end
end
