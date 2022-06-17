def yakuniy_im(ball, imt)
  if imt === "Yakuniy imtihon"
    ball >= 89 && ball <= 100
  else
    ball >= 90
  end
  "Bu imtihon javobi chiqmagan"
end


puts yakuniy_im(95, "Nazorat imtihon")