# Logika orqaliy yechganda.
def kattalik_1(x, y)
  if x > y && x >= 40 && x <= 60 && y >= 40 && y <= 60
    x
  else
    if y >= 40 && y <= 60 && x >= 40 && x <= 60
      y
    else
      nil
    end
  end
end

# Oson yo'l bilan yechgan.
def kattalik_2(x, y)
  [x, y].max if x >= 40 && x <= 60 && y >= 40 && y <= 60
end

puts kattalik_1(44, 6)
puts kattalik_2(44, 6)