export const useAuthPage = () => {
  const [type, setType] = useState('login');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
  });

  const { isAuth, setIsAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth]);

  const { mutate, isLoading } = useMutation(
    ['auth'],
    ({ email, password }) => AuthService.main(email, password, type),
    {
      onSuccess: () => {
        setIsAuth(true);
        reset();
      },
    },
  );

  const onSubmit = (data) => {
    console.log(data);
    mutate(data);
  };

  return useMemo(() => {
    setType, register, handleSubmit, errors, isLoading, onSubmit;
  }, [errors, isLoading]);
};
