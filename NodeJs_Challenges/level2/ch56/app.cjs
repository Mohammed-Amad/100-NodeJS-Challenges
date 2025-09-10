const user = await prisma.user.update({
  where: { id: userId },
  data: { verified: true },
});