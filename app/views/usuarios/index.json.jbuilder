json.array!(@usuarios) do |usuario|
  json.extract! usuario, :id, :pessoa, :login, :senha, :email, :email_recuperacao, :genero
  json.url usuario_url(usuario, format: :json)
end
