json.array!(@pessoas) do |pessoa|
  json.extract! pessoa, :id, :nome, :data_nasc, :sexo, :pais
  json.url pessoa_url(pessoa, format: :json)
end
