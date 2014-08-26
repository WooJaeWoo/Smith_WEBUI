function pow(num, power)
{
	if (power > 0)
	{
		return num * pow(num, power - 1);
	}
	else
	{
		return 1;
	}
}