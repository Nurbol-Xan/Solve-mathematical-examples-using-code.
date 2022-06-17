def soz(str)
  if str.length < 3
    str.upcase
  else
    str[0..2].downcase + str[3..-1]
  end
end

puts soz("RUBY")

